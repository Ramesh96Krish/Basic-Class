let Resume={
    Name:'Ramesh Krishnan',
    ContactNo:'8220080388',
    Address:{
    CrAd:'Chennai',
    PrAd:'Trichy'
    },
    HighestDegree: 'PGDM (Marketing)',
    Project: 'Effect of IOT in Coimbatore SMART City',
    Internship:'Brand Management for Aura Illumination',
    WorkExper: '2 year',
    Currentemp:'Sundaram home finance ltd',
    Currentrole:'Assitant Manager-Marketing',
    Certification:'Google digital Unlocked, Google Analytics, Hubspot, SM Study',
    Tools:'Excel, SPSS, Tableau, R',
    Specialization:'Inbound Marketing, Marketing Analytics, Brand Management,Content Marketing, Market Research',
    Hobbies:'Doing Sports, Culinary practices, playing with pets'
    };
    let s= JSON.stringify(Resume);
    console.log(s);

    //For loop for given JSON
//Traditional For Loop
    const js=[{"createdAt":"2022-08-07T23:56:20.301Z","name":"Miss Edwin Prosacco","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg","id":"1"},{"createdAt":"2022-08-07T18:38:52.287Z","name":"Holly Schuster","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/833.jpg","id":"2"},{"createdAt":"2022-08-08T09:43:49.596Z","name":"Nicole Smith","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg","id":"3"},{"createdAt":"2022-08-07T21:15:28.782Z","name":"Dennis Prohaska","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg","id":"4"},{"createdAt":"2022-08-08T06:31:37.868Z","name":"Kerry Turner","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg","id":"5"},{"createdAt":"2022-08-08T16:26:13.998Z","name":"Geraldine Grimes","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/661.jpg","id":"6"},{"createdAt":"2022-08-08T03:04:48.711Z","name":"Karla Lemke IV","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg","id":"7"},{"createdAt":"2022-08-08T10:38:31.773Z","name":"Cary Maggio","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/105.jpg","id":"8"},{"createdAt":"2022-08-08T03:44:33.350Z","name":"Eric Dietrich","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg","id":"9"}]
    for (let j=0;j<js.length;j++)
    {
        console.log(js[j]);
    }
//For Of
const js1=[{"createdAt":"2022-08-07T23:56:20.301Z","name":"Miss Edwin Prosacco","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg","id":"1"},{"createdAt":"2022-08-07T18:38:52.287Z","name":"Holly Schuster","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/833.jpg","id":"2"},{"createdAt":"2022-08-08T09:43:49.596Z","name":"Nicole Smith","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg","id":"3"},{"createdAt":"2022-08-07T21:15:28.782Z","name":"Dennis Prohaska","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg","id":"4"},{"createdAt":"2022-08-08T06:31:37.868Z","name":"Kerry Turner","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg","id":"5"},{"createdAt":"2022-08-08T16:26:13.998Z","name":"Geraldine Grimes","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/661.jpg","id":"6"},{"createdAt":"2022-08-08T03:04:48.711Z","name":"Karla Lemke IV","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg","id":"7"},{"createdAt":"2022-08-08T10:38:31.773Z","name":"Cary Maggio","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/105.jpg","id":"8"},{"createdAt":"2022-08-08T03:44:33.350Z","name":"Eric Dietrich","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg","id":"9"}]
for (let k of js1)
{
    console.logn(k);
}
//For Each
const js2=[{"createdAt":"2022-08-07T23:56:20.301Z","name":"Miss Edwin Prosacco","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg","id":"1"},{"createdAt":"2022-08-07T18:38:52.287Z","name":"Holly Schuster","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/833.jpg","id":"2"},{"createdAt":"2022-08-08T09:43:49.596Z","name":"Nicole Smith","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg","id":"3"},{"createdAt":"2022-08-07T21:15:28.782Z","name":"Dennis Prohaska","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg","id":"4"},{"createdAt":"2022-08-08T06:31:37.868Z","name":"Kerry Turner","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg","id":"5"},{"createdAt":"2022-08-08T16:26:13.998Z","name":"Geraldine Grimes","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/661.jpg","id":"6"},{"createdAt":"2022-08-08T03:04:48.711Z","name":"Karla Lemke IV","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg","id":"7"},{"createdAt":"2022-08-08T10:38:31.773Z","name":"Cary Maggio","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/105.jpg","id":"8"},{"createdAt":"2022-08-08T03:44:33.350Z","name":"Eric Dietrich","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg","id":"9"}]
js.forEach(Data);
function Data(i)
{
    console.log(i);
}
// For In
const js3=[{"createdAt":"2022-08-07T23:56:20.301Z","name":"Miss Edwin Prosacco","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg","id":"1"},{"createdAt":"2022-08-07T18:38:52.287Z","name":"Holly Schuster","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/833.jpg","id":"2"},{"createdAt":"2022-08-08T09:43:49.596Z","name":"Nicole Smith","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg","id":"3"},{"createdAt":"2022-08-07T21:15:28.782Z","name":"Dennis Prohaska","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg","id":"4"},{"createdAt":"2022-08-08T06:31:37.868Z","name":"Kerry Turner","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg","id":"5"},{"createdAt":"2022-08-08T16:26:13.998Z","name":"Geraldine Grimes","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/661.jpg","id":"6"},{"createdAt":"2022-08-08T03:04:48.711Z","name":"Karla Lemke IV","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg","id":"7"},{"createdAt":"2022-08-08T10:38:31.773Z","name":"Cary Maggio","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/105.jpg","id":"8"},{"createdAt":"2022-08-08T03:44:33.350Z","name":"Eric Dietrich","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg","id":"9"}]
for(let x in js3)
{
    console.log(x);
    console.log(js3[x]);
}