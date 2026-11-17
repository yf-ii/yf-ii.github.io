(function(){
  const cfg=window.YFII_CONFIG||{};
  async function parseResponse(r){
    const text=await r.text();
    let data;
    try{ data=JSON.parse(text); }
    catch(e){ throw new Error('Backend returned a non-JSON response (HTTP '+r.status+').'); }
    if(!r.ok) throw new Error(data.message||('Backend HTTP error '+r.status));
    return data;
  }
  async function get(params){
    const u=new URL(cfg.API_URL);
    Object.entries(params||{}).forEach(([k,v])=>{if(v!==undefined&&v!==null&&String(v)!=='')u.searchParams.set(k,v)});
    try{ return await parseResponse(await fetch(u.toString(),{method:'GET'})); }
    catch(e){ throw new Error('GET request failed: '+(e.message||e)); }
  }
  async function post(type,data){
    if(location.protocol==='file:') throw new Error('This page is being opened as a local file. Please publish the extracted website to GitHub Pages (or another HTTPS host) and submit the form from its HTTPS address. The Apps Script backend cannot be reliably tested from a file:// page.');
    try{
      return await parseResponse(await fetch(cfg.API_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({type,data})}));
    }catch(e){ throw new Error('Backend submission failed: '+(e.message||e)); }
  }
  window.YFII_API={get,post};
})();
