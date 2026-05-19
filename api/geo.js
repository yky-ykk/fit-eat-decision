function decodeHeader(value) {
  if (!value) return '';
  try {
    return decodeURIComponent(String(value));
  } catch (error) {
    return String(value);
  }
}

function firstHeader(req, name) {
  const value = req.headers[name.toLowerCase()];
  if (Array.isArray(value)) return value[0] || '';
  return value || '';
}

module.exports = function handler(req, res) {
  const country = firstHeader(req, 'x-vercel-ip-country');
  const region = firstHeader(req, 'x-vercel-ip-country-region');
  const city = decodeHeader(firstHeader(req, 'x-vercel-ip-city'));
  const latitude = firstHeader(req, 'x-vercel-ip-latitude');
  const longitude = firstHeader(req, 'x-vercel-ip-longitude');
  const timezone = firstHeader(req, 'x-vercel-ip-timezone');
  const forwardedFor = firstHeader(req, 'x-forwarded-for');
  const ip = forwardedFor.split(',')[0].trim() || req.socket?.remoteAddress || '';

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.statusCode = 200;
  res.end(JSON.stringify({
    ok: true,
    provider: city || country ? 'vercel' : 'local',
    country,
    region,
    city,
    latitude,
    longitude,
    timezone,
    ipHint: ip ? `${ip.slice(0, 5)}...` : ''
  }));
};
