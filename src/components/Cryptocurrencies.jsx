import React, { useEffect, useContext, useState } from "react";
import millify from "millify";
import { Row, Col, Card, Input } from "antd";
import { useGetCryptoQuery } from "../services/cryptoAPI";
import { ConnectWalletContext } from "../context/ConnectWalletContext";

const Cryptocurrencies = () => {
  const { connectedAccount } = useContext(ConnectWalletContext);
  //passing the count to get the max of the cryptolist
  //Note - api is allowing to get the max of 50 crypto tokens as a whole
  //Redux toolKit provides the below hook automaitically when calling the createAPI module
  const { data: cryptosList, isLoading } = useGetCryptoQuery(50);
  const [cryptos, setCryptos] = React.useState([]);
  const [searchToken, setSearchToken] = React.useState("");

  //useEffect get executed or triggerd only when its dependency get changed like conditionally
  //this hook is used to search for the specify token by filter with given token name
  useEffect(() => {
    let cryptoTokens = cryptosList?.tokens.filter((textName) =>
      textName.name.toLowerCase().includes(searchToken.toLowerCase())
    );
    setCryptos(cryptoTokens);
  }, [cryptosList, searchToken]);

  //redux tookKit giving the isLoading implicitly
  if (isLoading) return "Loading...";

  return (
    <div>
      {connectedAccount.length > 0 ? (
        <>
          {cryptos?.length > 0 ? (
            <>
              <div>
                <h1 className="crypto-heading-container">
                  List of CryptoCurrencies
                </h1>
              </div>

              <div className="search-crypto">
                <Input
                  type="text"
                  placeholder="Search by coin name"
                  style={{
                    width: "auto",
                    height: "50px",
                    border: "1px solid #737373",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    fontSize: "18px",
                    padding: "0 10px",
                    marginBottom: "1rem",
                  }}
                  onChange={(e) => setSearchToken(e.target.value)}
                />
              </div>

              <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((cryptoItems, index) => (
                  <Col
                    xs={24}
                    sm={12}
                    lg={6}
                    className="crypto-card"
                    key={cryptoItems.address}
                  >
                    <a
                      href={cryptoItems.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Card
                        style={{ borderBlockColor: "cyan" }}
                        title={`#${index + 1}.${cryptoItems.name} `}
                        extra={
                          <img
                            className="crypto-image"
                            src={`https://ethplorer.io${
                              cryptoItems.image ?? ""
                            }`}
                            alt=""
                          />
                        }
                        hoverable
                      >
                        <p>Symbol: {cryptoItems.symbol}</p>
                        <p>Price: ${millify(cryptoItems.price.rate)}</p>
                        <p>MarketCap: {millify(cryptoItems.cap)}</p>
                        <p>Daily Change: {cryptoItems.price.diff}</p>
                        <p>
                          24hrs Volume: {millify(cryptoItems.price.volume24h)}
                        </p>
                      </Card>
                    </a>
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cryptocurrencies;
