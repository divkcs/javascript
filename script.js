<script>
  function findCountOfSameDocName(documents, key) {
    let list = [];

    documents.forEach((document) => {
      if (list.some((doc) => {
          return doc[key] == document[key];
        })) {
        list.forEach((file) => {
          if (file[key] === document[key]) {
            file["occurrence"]++;
          }
        })
      } else {
        let docObj = {};
        docObj[key] = document[key];
        docObj["occurrence"] = 1;
        list.push(docObj);
      }
    });
    return list;
  }


  let documentList = [{
      fileName: "Vue",
      id: 23
    },
    {
      fileName: "React",
      id: 24
    },
    {
      fileName: "Angular",
      id: 21
    },
    {
      fileName: "Vue",
      id: 25
    },
    {
      fileName: "Angular",
      id: 22
    },
    {
      fileName: "Vue",
      id: 20
    },
    {
      fileName: "Vue",
      id: 32
    },
    {
      fileName: "Vue",
      id: 31
    },
    {
      fileName: "Vue",
      id: 29
    },
    {
      fileName: "Vue",
      id: 33
    },
    {
      fileName: "Vue",
      id: 55
    },
    {
      fileName: "Vue",
      id: 65
    },
    {
      fileName: "Vue",
      id: 89
    },
    {
      fileName: "Vue",
      id: 76
    },
    {
      fileName: "Vue",
      id: 56
    }
  ]

  let column = "fileName";
  console.log(findCountOfSameDocName(documentList, column))

</script>
