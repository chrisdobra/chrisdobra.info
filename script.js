const search = instantsearch({
  appID: 'latency',
  apiKey:'8e1b169fd2c844a93baaf7e4737f1d19',
  indexName:'test',
  urlSync:true
});

search.addWidget(
  instantsearch.widgets.searchBox({
     container:'#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
     container:'#hits',
     histsPerPage:10,
     templates:{
       item: document.getElementById('hit-template').innerHTML,
       empty:"No results were found <em>\"{{query}}\"</em>"
     }
  })
);

search.addWidget(
   instantsearch.widgets.pagination({
      container:'#pagination'
   })
);

search.start();
