import { useEffect, useState } from "react";
import jsonMewarnai from './Mewarnai.json'
import jsonMenggambar from './Menggambar.json'
import jsonMenari from './Menari.json'
import pamfletDMM from './PAMFLET KEPERLUAN DMM.png'
import titleLogo from './Frame 1.png'
function App() {
  const [namaLomba, setNamaLomba] = useState("1")
  const [namaPeserta, setNamaPeserta] = useState("")
  const [dataPeserta, setDataPeserta] = useState([])
  useEffect(() => {
    console.log()
  },[])

  function onClickCariPeserta() {
    if (namaLomba ==='1') {
      if (namaPeserta !=='') {
        const regexPattern = new RegExp(namaPeserta,"i");
        setDataPeserta( jsonMewarnai.filter(data => regexPattern.test(data.Nama)))
      } else{
        setDataPeserta( jsonMewarnai)
      }

    } else if (namaLomba ==='2') {
      if (namaPeserta !=='') {
        const regexPattern = new RegExp(namaPeserta,"i");
        setDataPeserta( jsonMenggambar.filter(data => regexPattern.test(data.Nama)))
      } else{
        setDataPeserta(jsonMenggambar)
      }
    } else if (namaLomba ==='3') {
      if (namaPeserta !=='') {
        const regexPattern = new RegExp(namaPeserta,"i");
        setDataPeserta( jsonMenari.filter(data => regexPattern.test(data.Nama)))
      } else{
        setDataPeserta(jsonMenari)
      }
    }
  }
  return (
    <div className="p-3 w-full flex items-center flex-col">
    {/* <div className=" mb-8 w-full flex justify-center items-center"> */}
            <img className="mb-3" width={500}  alt={'logo'} src={titleLogo}/> 
            {/* <h1 className="font-bold text-3xl text-blue-500">Sentono Fest Berkarya</h1>
            </div> */}

      <div className="flex bg-blue-500 border border-blue-500 w-full max-md:flex-col max-md:text-xs">
      <select  className="text-blue-600 border-none p-3 " onChange={(e) => {setNamaLomba(e.target.value)}}>
        <option value="1">Mewarnai</option>
        <option value="2">Menggambar</option>
        <option value="3">Menari</option>
      </select>
      <input type="text"placeholder="Masukan nama peserta!" className=" p-3 w-full"  onChange={(e) => {setNamaPeserta(e.target.value)}}/>
      <input type="button" onClick={onClickCariPeserta} value={'Cari Peserta'}  className="border-none p-3 text-white"/>
      </div>
      <img className="my-6" width={300} alt={'logo'} src={pamfletDMM}/> 


      <div className="rounded-lg flex justify-center flex-wrap gap-5">
        {dataPeserta.map(datas => (

        <div className="border border-blue-400 p-3  flex justify-between  gap-3 max-md:w-full max-xl:w-96 max-md:text-xs">
          <div className=" flex flex-col w-full">
            <p><b>No Peserta:</b> {datas.NO}</p>
            <p><b>Nama:</b> {datas.Nama}</p>
            <p><b>Alamat:</b> {datas.Alamat}</p>
            <p><b>Asal Sekolah:</b> {datas.Asal_Sekolah}</p>
            <p><b>Kelas:</b> {datas.Kelas}</p>
            <p><b>No WA:</b> {datas.No_WA}</p>
            {jsonMenari!==dataPeserta && datas.Link !== ''?(
            <a className="" href={`https://drive.google.com/uc?export=view&id=${datas.Link}`}><p className="text-center p-2 btn  text-white border hover:text-blue-500 bg-blue-500 hover:bg-transparent hover:border hover:border-blue-500 "><b>lihat karya</b></p></a>
          ):null}
          </div>
          {jsonMenari!==dataPeserta?(
            <img className="border border-blue-400 object-cover w-32" alt={datas.Link?"Karya ditemukan":'Karya tak ditemukan'} src={`https://drive.google.com/uc?export=view&id=${datas.Link}`}/> 
          ):null}
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
