import { getWorkspaces } from 'bolt';
import { remove } from 'fs-extra';
import { join, relative } from 'path';

export default async function() {
  await remove('./site/.cache');
  for (const w of await getWorkspaces()) {
    const toRemove = relative(process.cwd(), join(w.dir, 'dist'));
    await remove(toRemove);
  }
}
