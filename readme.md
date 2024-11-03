# Webdisk | Manage filesystem in browser

Webdisk is a browser-based file system management library. Webdisk is used to create, modify, read files locally in the browser. It uses OPFS at its core.

## Creating a file

```
import Webdisk from "webdisk";

let webdisk = new Webdisk();
await webdisk.connect();
await webdisk.createFile("folder/path/nested/filename.txt", "content of the file");

```

## Reading a file

```
import Webdisk from "webdisk";

let webdisk = new Webdisk();
await webdisk.connect();
await webdisk.createFile("folder/path/nested/filename.txt", "content of the file");
let data = await webdisk.readFile("folder/path/nested/filename.txt");
console.log(await data.text());

```

## Checking if file exists

```
import Webdisk from "webdisk";

let webdisk = new Webdisk();
await webdisk.connect();
if(await webdisk.fileExists("folder/path/nested/filename.txt")){
    let data = await webdisk.readFile("folder/path/nested/filename.txt");
    console.log(await data.text());
}else{
    console.log("file does not exists");
}


```
