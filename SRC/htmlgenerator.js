function buildPage (team) {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${team.names}</h1>
        <p class="lead">Employee id is ${team.ID}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email username is ${team.email}</li>
          <li class="list-group-item">The school I attend/attended is ${team.school}</li>
          <li class="list-group-item">My github username is ${team.GitHub}</li>
          <li class="list-group-item">My office number is ${team.officeNum}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
}

module.exports = buildPage;