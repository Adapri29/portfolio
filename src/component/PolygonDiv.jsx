
export const PolygonDiv = ({polygonPanelContainer, polygonPanel, children}) => {
  return (
     
    <div 
        className='polygon-container'
        style={{
            clipPath: polygonPanelContainer, // Usamos el valor del prop polygonPanelContainer
        }}
    >
        <div 
            className='polygon'
            style={{
                clipPath: polygonPanel, // Usamos el valor del prop polygonPanelContainer
            }}
        >
            {children}
        </div>
    </div>
  )
}
