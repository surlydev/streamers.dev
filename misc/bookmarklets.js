// Create bookmarklets at https://mrcoles.com/bookmarklet/

// addChannel
const SITE_URL = 'https://streamers.dev';
const SITE_URL = 'http://localhost:3000';
const url = window.location.href;
const match = url.match(/https?:\/\/(?:www\.)?twitch.tv\/([\w]*)\/?/i);
if (match) {
  const channelname = match[1];

  // fetch(`${SITE_URL}/api/addChannel?name=${channelname}&backlog=1`)
  fetch(`${SITE_URL}/api/addChannel?name=${channelname}`)
    .then((res) => res.json())
    .then((data) => window.alert(data.message));
} else window.alert('Not on a Twitch profile URL');
