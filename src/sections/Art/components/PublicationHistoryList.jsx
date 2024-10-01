
export default function PublicationHistoryList({ art }) {

    return (

        <>

        <ul>
            {art.PublicationHistoryList.map((history, index) => (
            <li key={index}>{history}</li> 
            ))

            
            }
        </ul>

        
        
        
        </>
    )
}
