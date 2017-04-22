module.exports = {
  'post test' : function(client){
    client
        .assert.containsText('Grammy', 'Awards')
        .end()
  }
}
