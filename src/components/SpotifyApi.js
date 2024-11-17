import querystring from "querystring";
import { Buffer } from "buffer";
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (client_id, client_secret, refresh_token) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,   
  
    }).toString(),
  });

  return response.json();
};

export const getNowPlaying = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );
  

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


export const getRecentlyPlayed = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    "AQAMek15EK4og3e1F4gAqBgWkDdZ7ql2acKnuAtOAl1Qh9YDP7Ae3UNoovmqYyEUguOH35jVSwu6ZvL8SvgFDa4rWMaoHFPJq6d0_jMmErow9hxzvnDP80cCweRkbh78Jzk"
  );
  

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};



export default async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
 // console.log(await response.json())
  if (response.status === 204 || response.status > 400) {

   
    const recentResponse = await getRecentlyPlayed(client_id, client_secret, refresh_token);
   // console.log(await recentResponse.json())
    const song = await recentResponse.json();
 //   const isPlaying = song.is_playing;
 console.log(song)
    const playedAt = song.items[0].played_at
    const title = song.items[0].track.name;
    const artist = song.items[0].track.album.artists.map((_artist) => _artist.name).join(", ");
    const album = song.items[0].track.album.name;
    const albumImageUrl = song.items[0].track.album.images[0].url;
    const songUrl = song.items[0].track.external_urls.spotify;
   
    const artistUrl = song.items[0].track.artists[0].external_urls.spotify;
  
    return {
      album,
      albumImageUrl,
      playedAt,
      artist,
     // isPlaying,
      songUrl,
      title,
      // timePlayed,
      // timeTotal,
      artistUrl
    };
    //return false;
  }

  const song = await response.json();
  console.log(song)
  const playedAt = "2020"
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const timePlayed = song.progress_ms;
  const timeTotal = song.item.duration_ms;
  const artistUrl = song.item.album.artists[0].external_urls.spotify;

  return {
    playedAt,
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    timePlayed,
    timeTotal,
    artistUrl
  };
}