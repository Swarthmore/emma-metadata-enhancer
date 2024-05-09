import { head as headTemplate } from './head'

export const preview = `
<!DOCTYPE html>
<html lang="en">
<head>
${headTemplate}
</head>
<body>
    <div id="document-preview">
        <h1 class="4xl"><strong>{{title}}</strong></h1>
        <div>{{content}}</div>
    </div>
</body>
</html>
`
