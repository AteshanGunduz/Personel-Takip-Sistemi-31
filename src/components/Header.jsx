export default function Header({report}) {

  const find = report.find((rep)=>{
      return  rep.infractionDetected === true
  })

  console.log(find);

  return (
    <header>
      <h1>
    
        <span style={{textDecoration: "none"}}>{find?.infractionDetected ? "Good Corp." : "Evil Corp."}</span>

      </h1>
      <div>
        <h3>
          <span>Çalışan Gözetleme Programı</span>
        </h3>
        <h3>Biz Bir Aileyiz Raporlama Arayüzü</h3>
      </div>
    </header>
  )
}
