export default function Other({formData,setFormData}){
    return(
        <div className="other-info-container">
        <input type="number" placeholder=" Telephone Number..."value={formData.telNumber} onChange={
                (event)=>setFormData({...formData, telNumber: event.target.value })}></input>
        <input type="text" placeholder=" Other..."value={formData.other} onChange={
                (event)=>setFormData({...formData, other: event.target.value })}></input>
    </div>
    )
}