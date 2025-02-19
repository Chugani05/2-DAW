<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Form</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <div>
            <h1 id="form-title">SQL Operations Form</h1>
            <label for="sql-query-type">Which operation would you like to perform?:</label>
            <select name="sql-query-type" id="sql-query-type">
                <option value="insert">Insert record</option>
                <option value="update">Update record</option>
                <option value="delete">Delete record</option>
            </select>
            <div id="form-container">
                <form action="sql_post.php" method="post" id="insert-form">
                    <input type="hidden" name="insert">
                    <label for="name">Name: </label><input type="text" name="name" value="" required><br>
                    <label for="email">Email: </label><input type="email" name="email" value="" required><br>
                    <input type="submit" value="Enviar">
                </form>
                <form action="sql_post.php" method="post" id="update-form">
                    <input type="hidden" name="update">
                    <label for="uid">Record ID:  </label><input type="number" name="uid" min="0" value="" required><br>
                    <label for="name">Updated name: </label><input type="text" name="name" value=""><br>
                    <label for="email">Updated email: </label><input type="email" name="email" value=""><br>
                    <input type="submit" value="Enviar">
                </form>
                <form action="sql_post.php" method="post" id="delete-form">
                    <input type="hidden" name="delete">
                    <label for="uid">Record ID:  </label><input type="number" name="uid" min="0" value="" required><br>
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </div>
        <div id="table-container">
            <h1>Resulting Table</h1>
            <table id="result-table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User creation date</th>
                </tr>
            </table>
        </div>
    </main>
   <script type="module" src="js/script.js" type="text/javascript"></script>
</body>
</html>