export default function PersonnalInfo({formData,setFormData}){
   
    return (
    
         <div className="personal-info-container">
            <input type="text" placeholder=" FirstName..."value={formData.firstName} onChange={
                (event)=>setFormData({...formData, firstName: event.target.value })}></input>
            <input type="text" placeholder=" LastName..."value={formData.lastName} onChange={
                (event)=>setFormData({...formData, lastName: event.target.value })}></input>
            <input type="text" placeholder=" UserName..."value={formData.userName} onChange={
                (event)=>setFormData({...formData, userName: event.target.value })}></input>
        </div>
     )
}