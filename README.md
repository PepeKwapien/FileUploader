# FileUploader

This is a very simple fullstack project created mainly to learn more about Agnular and ASP.NET Web API
It consists of 2 subprojects:
- [FileFront](#frontend)
- [FileApi](#backend)

The project idea origins from a recruitment process task that I received in August 2022.
The main purpose of the project was to create a simple application with front- and backend to upload files.

## 1. Frontend
This subsection will describe the frontend project.

### 1.1. Technologies
Angular, Typescript, HTML, CSS

### 1.2. Features
The frontend can:
- display all filenames stored in the database
- read file from user's disk
- send read filename
- delete existing filename from the list.

The frontend does not send entire file to the API. It only reads file and saves its name.\
Every request to the API is summarized by a toast message in the top right corner of the application.\
The form to send new file is hidden by default and can be displayed with a click of a button.

![image](https://user-images.githubusercontent.com/51708716/183243407-d32e089f-de21-49e5-be29-a5397504cb07.png)
![image](https://user-images.githubusercontent.com/51708716/183243416-6d1f0a3c-0c03-429b-b6b6-038976a084c5.png)
![image](https://user-images.githubusercontent.com/51708716/183243422-5f3175df-2bf7-4249-8e62-e6eca48e42be.png)


## 2. Backend
This subsection will describe the backend project.

### 2.1. Technologies
.Net, C#, EntityFramework, SQL Server

### 2.2. Features
Project exposes and API to read all filenames, remove specific filename and create a new entity.\
Database used in the solution is a local database that I installed on my machine.\
To communicate with database I used EntityFramework.

List of all endpoints can be found in the swagger documentation after running the API.\
Url for swagger after starting api: ```https://localhost:42000/swagger/index.html```

![image](https://user-images.githubusercontent.com/51708716/183243736-8cb6c2b0-19b0-4806-a8e6-269f219dc11b.png)


## 3. Database
Application uses SQL Server.

Database is very simple and it has 2 tables - one for filenames and one for entity framework migrations.

```
CREATE TABLE [dbo].[uploadedFiles] (
    [Id]       NVARCHAR (450) NOT NULL,
    [Filename] NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_uploadedFiles] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[__EFMigrationsHistory] (
    [MigrationId]    NVARCHAR (150) NOT NULL,
    [ProductVersion] NVARCHAR (32)  NOT NULL,
    CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED ([MigrationId] ASC)
);
```

## 4. How to run
This subsection will describe how to run application and test it.

### 4.1. With SQL Server installed
Database used in the backend project is a local SQL Server. Its connection string is saved in appsettings.json.

In order to create this database you can try 2 different solutions:
1. If you have SQL Server installed you can try running command ```update-database``` inside Nuget console. This should create a database on your local machine.
2. Create own empty database, replace connection string inside appsettings.json and run ```update-database```.

After creating the database you have to do the following:
1. Start API project.
2. Navigate to frontend directory and inside command line type ```ng serve``` (you have to install Angular CLI in order to run this command)

Frontend's URL: ```http://localhost:4200/```
Backend's URL: ```https://localhost:42000/```

### 4.2. Without SQL Server
If you run into problems with starting application due to the database connection error you can use backend mock in order to test frontend.\
Project has a package called 'json-server' which allows developers to test their frontend without actual access to working backend.

In order to test only frontend:
1. Navigate to frontend directory and open two command lines.
2. In one command line run ```npm run server```
3. In the second command line run ```ng serve```

## 5. Improvements
This subsection lists improvement ideas that I had during development process.\
Improvements were not implemented due to the lack of time.

- [x] Toast messages
- [ ] Connection to a deployed database
- [ ] Uploading actual files instead of just their names
