class Webdisk {
  constructor() {
    this.handler = false;
    this.type = "local";
  }
  connect = async () => {
    this.handler = await window.navigator.storage.getDirectory();
  };
  createFile = async (file, content, options = { create: true }) => {
    let fileHandle = await this.getFileHandle(file, { create: options.create });
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
    return true;
  };

  readFile = async (file, options = { create: false }) => {
    let fileHandle = await this.getFileHandle(file, { create: options.create });
    let blob = await fileHandle.getFile();
    return blob;
  };
  fileExists = async (file) => {
    try {
      let fileHandle = await this.getFileHandle(file, { create: false });
      return true;
    } catch (error) {
      return false;
    }
  };

  getFileHandle = async (filePath, { create = true }) => {
    const parts = filePath.split("/");
    let currentDirHandle = this.handler;

    // Iterate through the directory path
    for (const part of parts.slice(0, -1)) {
      // All but the last part (file name)
      currentDirHandle = await currentDirHandle.getDirectoryHandle(part, {
        create: create,
      });
    }

    // Get the file handle for the final part (the file name)
    return await currentDirHandle.getFileHandle(parts[parts.length - 1], {
      create: create,
    });
  };

  getFolderHandle = async (folderPath, { create = false }) => {
    const parts = folderPath.split("/");
    let currentDirHandle = this.handler;

    // Iterate through the directory path
    for (const part of parts.slice(0, -1)) {
      // All but the last part (file name)
      currentDirHandle = await currentDirHandle.getDirectoryHandle(part, {
        create: create,
      });
    }

    // Get the file handle for the final part (the file name)
    return await currentDirHandle.getDirectoryHandle(parts[parts.length - 1], {
      create: create,
    });
  };

  listFiles = async (folderPath) => {
    const allFiles = [];

    let folderHandle = await this.getFolderHandle(folderPath, {
      create: false,
    });
    const directoryIterator = folderHandle.values();

    for await (const handle of directoryIterator) {
      if (handle.kind === "file") {
        allFiles.push(handle);
      }
    }
    return allFiles;
  };

  createFolder = async () => {};
}

module.exports = Webdisk;
