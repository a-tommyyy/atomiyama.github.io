/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { join } = require('path');

module.exports = () => {
  const posts = getPosts(join(__dirname, 'contents'))
  console.log(posts)
  return [
    { url: '/' },
    ...posts,
  ]
}

/**
 * ./contents ディレクトリは以下の構造になっている
 *  contents
 *    ├─ 2023
 *    │   └─ 01
 *    │       └─ 01
 *    │           └─ new_year.md
 *    └─ releases
 *        ├─ v1_0_0
 *        │   └─ CHANGELOG.md
 *        └─ license.md
 * 
 * Output: [
 *  { url: '/2023/01/01/new_year' },
 *  { url: '/releases/v1_0_0/CHANGELOG' },
 *  { url: '/releases/license' },
 * ]
 */
function getPosts(path, parent = '/posts') {
  return fs.readdirSync(path).reduce((acc, file) => {
    const fp = join(path, file)

    if (isDirectory(fp)) {
      return [...acc, ...getPosts(fp, join(parent, file))]
    }
    else if (isMarkdown(fp)) {
      const url = join(parent, file.replace(/\.md$/, ''))
      const content = fs.readFileSync(fp, 'utf8')
      return [...acc, { url, data: { content } }]
    }
    return acc
  }, []) 

}

const isDirectory = (path) => fs.lstatSync(path).isDirectory()
const isMarkdown = (path) => fs.lstatSync(path).isFile() && path.endsWith('.md')