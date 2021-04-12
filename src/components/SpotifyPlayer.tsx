import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SpotifyData {
    songName: string,
    progress: number,
    length: number,
    artists: {
        name: string
    }[]
    images: {
        url: string
    }[]
}

export const SpotifyPlayer = () => {
    const [songData, setSongData] = useState<SpotifyData>();

    useEffect(() => {
        const webSocket = new WebSocket('wss://api.havelka.net');
        webSocket.onopen = () => {
            webSocket.onmessage = (message) => {
                const parsed = JSON.parse(message.data);
                if (parsed.message === 'song') {
                    const { data } = parsed;
                    setSongData(data);
                }
            };
        };
    }, []);

    if (!songData) return <></>;

    return (
        <>
            <CurrentlyListening>Na Spotify právě poslouchám</CurrentlyListening>
            <SpotifyContainer>
                <SpotifyImage width={64} height={64} src={songData.images.pop()?.url} />
                <SongDataDiv>
                    <SongTitle>
                        &apos;
                        {songData.songName}
                        &apos;&nbsp;
                        od&nbsp;
                        {songData.artists.map((artist) => artist.name).join(' & ')}
                    </SongTitle>
                    <SongProgressHolder>
                        <SongProgress style={{
                            width: `${Math.floor((songData.progress / songData.length) * 100)}%`,
                        }}
                        />
                    </SongProgressHolder>
                </SongDataDiv>
            </SpotifyContainer>
        </>
    );
};

const SpotifyContainer = styled.div`
  background: #DEE5FD;
  max-width: 400px;
  border-bottom-left-radius: 50px;
  padding: 25px;
  display: flex;
  @media (max-width: 800px) {
    margin: auto;
  }

`;
const SpotifyImage = styled.img`
  border-radius: 50%;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;

const SongTitle = styled.div`
  font-weight: bold;
  max-width: 250px;
  padding-bottom: 10px;
  flex: 100%;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const SongDataDiv = styled.div`
  padding-left: 25px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`;

const SongProgressHolder = styled.div`
  min-width: 200px;
  height: 5px;

  background-color: white;
  position: relative;
  border-radius: 7px;
  @media (max-width: 800px) {
    min-width: unset;
    width: 100%;
  }
`;

const SongProgress = styled.div`
  background-color: #0047FF;
  border-radius: 7px;
  position: relative;
  transition: width 1s;
  left: 0;
  height: inherit;
`;

const CurrentlyListening = styled.p`
  color: #0047FF;
  font-weight: bold;
  padding-bottom: 10px;
  font-size: 16px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
