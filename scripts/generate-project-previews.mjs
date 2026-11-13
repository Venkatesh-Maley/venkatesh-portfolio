import { mkdir, writeFile } from 'node:fs/promises';

// Deterministic vector sample screens, not screenshots of the real projects.
const output = new URL('../public/images/projects/', import.meta.url);
await mkdir(output, { recursive: true });
const colors = { ink: '#182b49', muted: '#6b7b93', blue: '#2563eb', pale: '#eef4ff', border: '#dce5f2' };
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const rect = (x, y, width, height, fill = '#ffffff', radius = 12, stroke = colors.border) => `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x, y, value, size = 20, fill = colors.ink, weight = 400) => `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}">${escape(value)}</text>`;
const button = (x, y, label, width = 190) => rect(x, y, width, 48, colors.blue, 9, colors.blue) + text(x + 18, y + 31, label, 17, '#ffffff', 600);
const tag = (x, y, label) => rect(x, y, 116, 32, colors.pale, 16) + text(x + 14, y + 22, label, 14, colors.blue, 600);

function screen(title, subtitle, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680" viewBox="0 0 1200 680"><title>${escape(title)} — illustrative sample</title><desc>${escape(subtitle)}. Generated sample with fictional data, not a live application screenshot.</desc><style>text{font-family:Segoe UI,Arial,sans-serif}</style>${rect(0, 0, 1200, 680, '#ffffff', 0, 'none')}${text(64, 66, title, 29, colors.ink, 650)}<path d="M64 96H1132" stroke="${colors.border}"/><g transform="translate(0,-70)">${content}</g></svg>`;
}

const endpoints = [
  ['POST', '/auth/login', 'Authenticate a user'],
  ['GET', '/blood-requests', 'List blood requests'],
  ['POST', '/blood-requests', 'Create a blood request'],
  ['PATCH', '/blood-requests/{id}/approve', 'Approve a request'],
  ['PATCH', '/blood-requests/{id}/accept', 'Assign a volunteer'],
];
const api = screen('Blood Donation Service', 'API documentation · illustrative endpoint structure',
  tag(64, 198, 'OpenAPI 3.0') + button(940, 190, 'Authorize', 190) + endpoints.map(([method, path, label], index) => {
    const y = 266 + index * 80;
    return rect(64, y, 1068, 64, index % 2 ? '#f8faff' : '#ffffff', 9) + rect(78, y + 14, 90, 36, colors.blue, 7, 'none') + text(92, y + 38, method, 16, '#ffffff', 650) + text(192, y + 39, path, 20, colors.ink, 550) + text(760, y + 39, label, 16, colors.muted);
  }).join(''));

const requestRows = [
  ['DEMO-001', 'O+', '2 units', 'Pending'],
  ['DEMO-002', 'A+', '1 unit', 'Approved'],
  ['DEMO-003', 'B+', '2 units', 'Accepted'],
];
const requests = screen('Blood Donation Service', 'Request management · sample dashboard concept',
  ['New requests', 'Awaiting volunteers', 'Fulfilled'].map((label, index) => {
    const x = 64 + index * 366;
    return rect(x, 206, 340, 112, colors.pale) + text(x + 24, 244, label, 17, colors.muted) + text(x + 24, 292, ['03', '02', '08'][index], 36, colors.blue, 650);
  }).join('') + text(64, 374, 'Recent blood requests', 23, colors.ink, 650) + button(930, 342, '+ New request', 200) + rect(64, 404, 1068, 60, colors.pale, 8) + ['Request', 'Blood group', 'Quantity', 'Status'].map((label, index) => text(88 + index * 260, 442, label, 17, colors.muted, 600)).join('') + requestRows.map((row, index) => {
    const y = 466 + index * 72;
    return rect(64, y, 1068, 70, '#ffffff', 0) + row.map((value, column) => text(88 + column * 260, y + 43, value, 20, column === 3 ? colors.blue : colors.ink, column === 3 ? 600 : 400)).join('');
  }).join(''));

const responseLines = ['{', '  "requestId": "DEMO-001",', '  "bloodGroup": "O+",', '  "units": 2,', '  "status": "fulfilled",', '  "volunteer": "Demo Volunteer"', '}'];
const response = screen('Blood Donation Service', 'Request lifecycle · sample API response',
  ['Created', 'Approved', 'Accepted', 'Fulfilled'].map((label, index) => {
    const x = 68 + index * 280;
    return rect(x, 210, 230, 72, colors.pale) + text(x + 23, 254, label, 21, colors.blue, 600) + (index < 3 ? text(x + 244, 254, '→', 24, colors.muted) : '');
  }).join('') + rect(64, 324, 1068, 360, '#101e35', 14, '#20334f') + text(92, 366, '200 OK · application/json · SAMPLE', 17, '#8fb8ff', 600) + responseLines.map((line, index) => text(94, 416 + index * 33, line, 22, '#d6e5ff')).join(''));

const login = screen('LINKRAA', 'A place for students and alumni · sample sign-in concept',
  rect(64, 210, 450, 464, colors.pale, 16) + text(104, 300, 'Your campus.', 39, colors.ink, 650) + text(104, 350, 'Your community.', 39, colors.blue, 650) + text(104, 414, 'Keep conversations going,', 22, colors.muted) + text(104, 448, 'wherever life takes you.', 22, colors.muted) + tag(104, 534, 'RGUKT') + text(594, 254, 'Welcome back', 30, colors.ink, 650) + text(594, 291, 'Sign in to your community', 19, colors.muted) + text(594, 351, 'Email address', 17, colors.ink, 600) + rect(594, 369, 490, 56) + text(612, 404, 'member@example.test', 19, colors.muted) + text(594, 465, 'Password', 17, colors.ink, 600) + rect(594, 483, 490, 56) + text(612, 522, '••••••••••', 25, colors.muted) + button(594, 576, 'Sign in', 490));

const channelNames = ['Campus community', 'Alumni connections', 'Career conversations', 'Tech discussions'];
const channels = screen('LINKRAA', 'Community groups · illustrative group directory',
  rect(64, 210, 260, 472, '#101e35', 14, '#101e35') + text(90, 260, 'Your workspace', 23, '#ffffff', 600) + ['Conversations', 'Discover groups', 'Profile'].map((label, index) => text(90, 328 + index * 65, label, 19, index === 1 ? '#8fb8ff' : '#c2cee2')).join('') + channelNames.map((label, index) => {
    const x = 354 + (index % 2) * 400;
    const y = 210 + Math.floor(index / 2) * 244;
    return rect(x, y, 376, 222) + rect(x + 22, y + 22, 46, 46, colors.pale, 10) + text(x + 35, y + 54, '#', 28, colors.blue, 650) + text(x + 22, y + 108, label, 21, colors.ink, 600) + text(x + 22, y + 144, 'Meet, share, and stay connected.', 17, colors.muted) + text(x + 22, y + 187, 'View conversation →', 17, colors.blue, 600);
  }).join(''));

const messages = [
  ['Demo Member', 'Great to see our community connecting here.', 338, false],
  ['Demo Alumni', 'Happy to share experiences and stay in touch!', 446, true],
  ['Demo Member', 'Looking forward to more conversations.', 554, false],
];
const chat = screen('LINKRAA', 'Group conversation · fictional messages for this sample',
  rect(64, 210, 270, 486, '#101e35', 14, '#101e35') + text(88, 256, 'Conversations', 23, '#ffffff', 600) + channelNames.map((label, index) => text(88, 326 + index * 72, label, 17, index === 0 ? '#8fb8ff' : '#c2cee2')).join('') + rect(354, 210, 778, 486, '#f8faff', 14) + text(380, 255, '# Campus community', 23, colors.ink, 650) + text(380, 285, 'Students + alumni', 16, colors.muted) + messages.map(([name, message, y, reply]) => {
    const x = reply ? 560 : 382;
    return rect(x, y - 30, reply ? 540 : 580, 88, reply ? colors.blue : '#ffffff', 12) + text(x + 18, y - 2, name, 15, reply ? '#d7e6ff' : colors.blue, 650) + text(x + 18, y + 30, message, 18, reply ? '#ffffff' : colors.ink);
  }).join('') + rect(380, 650, 640, 36, '#ffffff', 8) + text(395, 674, 'Write a message…', 15, colors.muted) + button(1034, 643, 'Send', 80));

for (const [name, svg] of Object.entries({ 'blood-api': api, 'blood-requests': requests, 'blood-response': response, 'linkraa-login': login, 'linkraa-groups': channels, 'linkraa-chat': chat })) {
  await writeFile(new URL(`${name}.svg`, output), svg);
}
console.log('Generated six illustrative project preview images.');
