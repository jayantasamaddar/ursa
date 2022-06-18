import { Text } from '.';

const Address = ({ value, onChange, errors }) => {
  const { address1, address2, city, province, zip, country } = value;

  return (
    <div className="Z-AddressFieldsGroup">
      <div className="Z-AddressLabel flex">
        <label className="text-standard">Address</label>
      </div>
      <div className="Z-AddressFields flex-col gap-20">
        <div className="flex gap-20">
          {/* {(address1 !== undefined || address2 !== undefined) && <div className="address flex-col grow">
                    {address1 !== undefined && <Text label="Address 1" name="address1" value={address1} onChange={onChange} tabindex="1" />}
                    {address2 !== undefined && <Text className="pt-5" label="Address 2" name="address2" value={address2} onChange={onChange} tabindex="2" />}
                </div>} */}

          {/* {(city !== undefined || province !== undefined) && <div className="region flex-col grow">
                    {city !== undefined && <Text label="City" name="city" value={city} onChange={onChange} />}
                    {province !== undefined && <Text className="pt-5" label="State" name="province" value={province} onChange={onChange} />}
                </div>} */}

          {(address1 !== undefined || address2 !== undefined) && (
            <div className="region flex-col grow pt-5">
              {address1 !== undefined && (
                <div className="flex-col">
                  <Text
                    label="Address 1"
                    name="address1"
                    value={address1}
                    onChange={onChange}
                    tabindex="1"
                  />
                  {errors?.address1?.length > 0 && (
                    <div className="alert">
                      {errors?.address1.map((error, indx) => (
                        <p className="alert text-red-500" key={indx}>
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {address2 !== undefined && (
                <div className="flex-col pt-5">
                  <Text
                    className="pt-5"
                    label="Address 2"
                    name="address2"
                    value={address2}
                    onChange={onChange}
                    tabindex="2"
                  />
                  {errors?.address2?.length > 0 && (
                    <div className="alert">
                      {errors?.address2.map((error, indx) => (
                        <p className="alert text-red-500" key={indx}>
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {(city !== undefined || province !== undefined) && (
            <div className="region flex-col grow pt-5">
              {city !== undefined && (
                <div className="flex-col">
                  <Text
                    label="City"
                    name="city"
                    value={city}
                    onChange={onChange}
                  />
                  {errors?.city?.length > 0 && (
                    <div className="alert">
                      {errors?.city.map((error, indx) => (
                        <p className="alert text-red-500" key={indx}>
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {province !== undefined && (
                <div className="flex-col pt-5">
                  <Text
                    className="pt-5"
                    label="State"
                    name="province"
                    value={province}
                    onChange={onChange}
                  />
                  {errors?.province?.length > 0 && (
                    <div className="alert">
                      {errors?.province.map((error, indx) => (
                        <p className="alert text-red-500" key={indx}>
                          {error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {(zip !== undefined || country !== undefined) && (
          <div className="flex grow pt-5">
            {zip !== undefined && (
              <div className="flex-col basis-1/2 pr-10">
                <Text
                  label="Pincode"
                  name="zip"
                  value={zip}
                  onChange={onChange}
                />
                {errors?.zip?.length > 0 && (
                  <div className="alert">
                    {errors?.zip.map((error, indx) => (
                      <p className="alert text-red-500" key={indx}>
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {country !== undefined && (
              <div className="flex-col basis-1/2 pl-10">
                <Text
                  label="Country"
                  name="country"
                  value={country}
                  onChange={onChange}
                />
                {errors?.country?.length > 0 && (
                  <div className="alert">
                    {errors?.zip.map((error, indx) => (
                      <p className="alert text-red-500" key={indx}>
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Address;
