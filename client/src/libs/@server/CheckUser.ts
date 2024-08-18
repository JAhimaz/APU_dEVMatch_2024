import { DATA_API } from '@/util/APIs';

const CheckUser = async (data: {
  address: string;
}) => {
  const response = await fetch(`${DATA_API}/api/check-user/${data.address}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return response.json();
}

export default CheckUser;