export default [{
  hostname: process.env.TOP_FTP_HOSTNAME,
  username: process.env.TOP_FTP_USERNAME,
  password: process.env.TOP_FTP_PASSWORD,
  source: './demo',
  destination: ''
}, {
  hostname: process.env.SUB_FTP_HOSTNAME,
  username: process.env.SUB_FTP_USERNAME,
  password: process.env.SUB_FTP_PASSWORD,
  source: './server',
  destination: ''
}];