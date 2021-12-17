import React from "react";
import BingMapsReact from "bingmaps-react";

const BingMap = () => {
    return (
        <div>
            <BingMapsReact
                height="40vh"
                bingMapsKey="Ask Fraser For It"
                mapOptions={{
                    navigationBarMode: "square",
                    showBreadcrumb: true,
                }}
                width="50vw"
                viewOptions={{
                    center: { latitude: 53.475780, longitude: -2.242190 },
                    mapTypeId: "canvasLight",
                }}
            />
        </div>
    )
}

export default BingMap;