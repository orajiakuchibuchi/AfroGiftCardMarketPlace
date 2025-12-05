import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './app/app.server.module';
// your custom path
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// Our Universal express-engine (renders Angular app)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Serve static files
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

// Start up the Node server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
