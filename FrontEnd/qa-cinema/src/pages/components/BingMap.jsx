import React from "react";
import BingMapsReact from "bingmaps-react";

const BingMap = () => {
    return (
        <div>
            <BingMapsReact
                bingMapsKey="Ask Fraser For It"
                height="500px"
                mapOptions={{
                    navigationBarMode: "square",
                    showBreadcrumb: true,
                }}
                width="500px"
                viewOptions={{
                    center: { latitude: 37.234332396, longitude: -115.80666344 },
                    mapTypeId: "Aerial",
                }}
            />
        </div>
    )
}

export default BingMap;