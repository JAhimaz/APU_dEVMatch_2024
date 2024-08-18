import { DATA_API } from '@/util/APIs';

const FetchUserHistory = async (data: {
  address: string;
}) => {

  console.log(data.address);

  const response = await fetch(`${DATA_API}/api/get-certs/${data.address}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const nftRawData = await response.json().then(async (data) => {
    const results = data.data.result;
  
    // Use Promise.all to wait for all fetch requests to resolve
    const fetchedData = await Promise.all(
      results.map(async (result: any) => {
        const certificateResponse = await fetch(result.certificate_file);
        const certificate = await certificateResponse.json();
        return {
          name: certificate.name,
          tx_hash: result.transactionHash,
          created_at: result.created_at,
          block: result.blockNumber,
          attributes: certificate.attributes,
        }
      })
    );
  
    return fetchedData;
  });

  return nftRawData;
}

export default FetchUserHistory;