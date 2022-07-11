import CV from "../pages/CV";
import MapDefault from "../pages/MapDefault";
import Timer from "../pages/Timer"

export const routes = [
    {path: '/', element: CV},
    {path: 'map', element: MapDefault},
    {path: 'timer', element: Timer},
];