import { ref } from "vue";
import L from "leaflet";
import { showToast } from "@/utils/index.ts";

export function useAddressLocation(customIcon: L.Icon) {
  let map: L.Map;
  let marker: L.Marker | null = null;

  const selectedLatLng = ref<{ lat: number; lng: number } | null>(null);

  function initMap(containerId: string) {
    map = L.map(containerId).setView([35.6892, 51.389], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    map.on("click", (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      if (marker) {
        marker.setLatLng([lat, lng]);
      } else {
        marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
      }
      selectedLatLng.value = { lat, lng };
    });
  }

  function locateMe() {
    if (!navigator.geolocation) {
      showToast("مرورگر شما موقعیت‌یاب را پشتیبانی نمی‌کند.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (marker) {
          marker.setLatLng([latitude, longitude]);
        } else {
          marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(
            map
          );
        }
        map.setView([latitude, longitude], 18);
        selectedLatLng.value = { lat: latitude, lng: longitude };
      },
      () => {
        showToast("عدم دسترسی به موقعیت.");
      }
    );
  }

  return { initMap, locateMe, selectedLatLng };
}
