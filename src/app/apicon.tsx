"use client"
const getData = async()=>{
  const response=await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AVdxYD6T_iJkjfepW5xUzV1b-J533FA3_w42LheKjvXtWRj6XNr6ZPs-GhS18D6yqYGbuvtcPoIn9_xFFPWi_dIZiY8W9mQ_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnG7TrtFqSWOma63T-BfbUUvvBdmeAEgtVHHrI4Ucl5RVt8r6tnguUlMl9apJXR-5akhZyiJw27rUF5ilomh79nqkliFgWpO_kg&lib=MxUyyoYVmv9azQ1FdMDJLUpBy5cd6KXdU');

return response.json();
}

async function Apicall() {
  const apiData=await getData();
  const apiid=apiData.data[1];
  return (
    <>
    <div>
    {JSON.stringify(apiid)}
    </div>
    </>
  )}

  async function Apicall1() {
    const apiData=await getData();
    const apiid=apiData.data[0];
    return (
      <>
      <div>
      {JSON.stringify(apiid)}
      </div>
      </>
    )}



export {Apicall,Apicall1}
