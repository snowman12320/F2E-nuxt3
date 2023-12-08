  let dataS1;
  import(`~/assets/json/2020/全國投票總數.json`).then(importedAllVote => {
    dataS1 = {
      labels: ['有效票數', '無效票數'],
      datasets: [
        {
          backgroundColor: ['#262E49', '#CCCCCC'],
          data: [importedAllVote.default[0]['選舉人數'].replace(/,/g, ""), importedAllVote.default[0]['投票數'].replace(/,/g, "")]
        }
      ]
    };
  });
  export { dataS1 };

    let dataS2;
    import(`~/assets/json/2020/各黨數據.json`).then(importedPartyVote => {
      dataS2 = {
        labels: ['親民黨', '中國國民黨','民主進步黨'],
        datasets: [
          {
            backgroundColor: [ '#DFA175','#8894D8', '#84CB98'],
            data: [
              Number(importedPartyVote.default[0]['得票數'].replace(/,/g, "")), 
              Number(importedPartyVote.default[2]['得票數'].replace(/,/g, "")), 
              Number(importedPartyVote.default[4]['得票數'].replace(/,/g, ""))
            ]
          }
        ]
      };
    });
    export { dataS2 };


export const optionsS1 = {
  responsive: false,
  maintainAspectRatio: false,
  borderWidth: 1
}
export const optionsS2 = {
  responsive: false,
  maintainAspectRatio: false,
  borderWidth: 1
}




