import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef, useState } from "react";
import L from "leaflet";

function Covarage() {
  const position = [23.8617, 89.9767];

//load data from json file and match with the searched location
  const serviceCenters = useLoaderData();
//load data from json file and match with the searched location
  const mapRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  // Blue default icon
  const blueIcon = new L.Icon({
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Red highlight icon
  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    setSearchTerm(location);

    const matchedCenter = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (matchedCenter) {
      const coordinate = [
        matchedCenter.latitude,
        matchedCenter.longitude,
      ];

      mapRef.current.flyTo(coordinate, 14);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 bg-white font-sans select-none">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#04332D] tracking-tight mb-8">
            We are available in 64 districts
          </h2>

          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-xl h-14 flex items-center bg-[#F0F4F8] rounded-full p-1.5 mb-6"
          >
            <input
              name="location"
              type="text"
              placeholder="Search district..."
              className="w-full h-full bg-transparent border-none outline-none px-4 text-sm text-slate-700"
            />

            <button
              type="submit"
              className="btn h-full px-8 rounded-full bg-[#C2EB51] border-none text-[#04332D] font-bold"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="w-6xl mx-auto h-100 my-12">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="w-full h-full bg-white"
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => {
            const isMatch =
              searchTerm &&
              center.district
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            return (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
                icon={isMatch ? redIcon : blueIcon}
              >
                <Popup>
                  <div className="text-sm space-y-1">
                    <p><b>Region:</b> {center.region}</p>
                    <p><b>District:</b> {center.district}</p>
                    <p><b>City:</b> {center.city}</p>
                    <p>
                      <b>Covered Areas:</b>{" "}
                      {center.covered_area.join(", ")}
                    </p>
                    <p>
                      <b>Status:</b>{" "}
                      <span
                        className={
                          center.status === "active"
                            ? "text-green-600 font-semibold"
                            : "text-red-600"
                        }
                      >
                        {center.status}
                      </span>
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default Covarage;