import { calculateRegion } from "@/lib/maps";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

export default function Map() {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      initialRegion={region}
    ></MapView>
  );
}
