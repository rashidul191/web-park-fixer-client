const Admin = ({ admin, index }) => {
  const { _id, displayName, email, gender, role } = admin;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://i.ibb.co/vBPHFhQ/profile-icon.webp"
                alt="image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{displayName}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm font-bold">{email}</span>
      </td>
      <td className="font-bold uppercase text-green-400">{role}</td>
    </tr>
  );
};

export default Admin;
