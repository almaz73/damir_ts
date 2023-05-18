function addressChange (type, location, geometry) {
    console.log('type, location, geometry',type, location, geometry);

    if (type === 'flat' || type === 'house') me.firstMustBeNumber(type);
    if (type === 'flat') setTypeLikeApartment();

    if (type) {
      ///   chooswBetterCoordinate(type, location, geometry)
    }
    // vm.call.isAddressChanged = type;
};

export  {addressChange}
