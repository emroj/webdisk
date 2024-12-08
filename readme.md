# Webdisk | Manage filesystem in browser

Webdisk is a browser-based file system management library. Webdisk is used to create, modify, read files locally in the browser. It uses OPFS at its core.

## Creating a file

```
import Webdisk from "webdisk";

const webdisk = new Webdisk();
await webdisk.connect();  //connects to browser filesystem

await webdisk.createFile("folder/path/nested/filename.txt", "content of the file");

```

## Reading a file

```
import Webdisk from "webdisk";

const webdisk = new Webdisk();
await webdisk.connect();  //connects to browser filesystem

await webdisk.createFile("folder/path/nested/filename.txt", "content of the file");
let data = await webdisk.readFile("folder/path/nested/filename.txt");
console.log(await data.text());

```

## Checking if file exists

```
import Webdisk from "webdisk";

const webdisk = new Webdisk();
await webdisk.connect();  //connects to browser filesystem

if(await webdisk.fileExists("folder/path/nested/filename.txt")){
    let data = await webdisk.readFile("folder/path/nested/filename.txt");
    console.log(await data.text());
}else{
    console.log("File does not exists");
}


if(await webdisk.fileExists("some/other/folder/otherfile.txt")){
    let data = await webdisk.readFile("some/other/folder/otherfile.txt");
    console.log(await data.text());
}else{
    console.log("File does not exists");
}


```

## List all files in a directory

```
import Webdisk from "webdisk";

const webdisk = new Webdisk();
await webdisk.connect();  //connects to browser filesystem

await webdisk.createFile("folder/path/nested/filename1.txt", "This is file 1");
await webdisk.createFile("folder/path/nested/filename2.txt", "This is file 2");
await webdisk.listFiles("folder/path/nested/")

```
