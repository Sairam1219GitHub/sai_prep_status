// import React, { useState } from "react";

// export default function FetchApiExample() {
//   const [userId, setUserId] = useState("");
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const API_BASE = "https://jsonplaceholder.typicode.com";

//   const headers = {
//     "Content-Type": "application/json",
//     "auth-token": "12345ABCDE",
//     "header-type": "application/json",
//   };

//   // 1️⃣ GET Request with Headers
//   const handleGetFetch = async () => {
//     try {
//       const res = await fetch(${API_BASE}/users, {
//         method: "GET",
//         headers,
//       });
//       const data = await res.json();
//       console.log("FETCH GET:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 2️⃣ POST Request with Headers
//   const handlePostFetch = async () => {
//     try {
//       const res = await fetch(${API_BASE}/posts, {
//         method: "POST",
//         headers,
//         body: JSON.stringify({ title: "React Post", body: "Hello world" }),
//       });
//       const data = await res.json();
//       console.log("FETCH POST:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 3️⃣ PUT Request (Form Example)
//   const handlePutFetch = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(${API_BASE}/users/1, {
//         method: "PUT",
//         headers,
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log("FETCH PUT:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 4️⃣ GET Request with URL Params
//   const handleGetWithParamsFetch = async () => {
//     try {
//       const res = await fetch(${API_BASE}/comments?postId=${userId}, {
//         method: "GET",
//         headers,
//       });
//       const data = await res.json();
//       console.log("FETCH GET with Params:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 5️⃣ DELETE Request (Params + JSON Body)
//   const handleDeleteFetch = async () => {
//     try {
//       const res = await fetch(${API_BASE}/posts/${userId}, {
//         method: "DELETE",
//         headers,
//         body: JSON.stringify({ reason: "No longer needed" }),
//       });
//       const data = await res.json();
//       console.log("FETCH DELETE:", data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>🌐 API Calls using Fetch</h2>

//       <section>
//         <h3>1️⃣ GET with Headers</h3>
//         <button onClick={handleGetFetch}>Fetch - GET</button>
//       </section>

//       <section>
//         <h3>2️⃣ POST with Headers</h3>
//         <button onClick={handlePostFetch}>Fetch - POST</button>
//       </section>

//       <section>
//         <h3>3️⃣ PUT (Form Example)</h3>
//         <form>
//           <input
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           />
//           <button onClick={handlePutFetch}>Fetch - PUT</button>
//         </form>
//       </section>

//       <section>
//         <h3>4️⃣ GET with URL Params</h3>
//         <input
//           type="text"
//           placeholder="Enter Post ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <button onClick={handleGetWithParamsFetch}>Fetch - GET Params</button>
//       </section>

//       <section>
//         <h3>5️⃣ DELETE with Params + JSON</h3>
//         <input
//           type="text"
//           placeholder="Enter Post ID to delete"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <button onClick={handleDeleteFetch}>Fetch - DELETE</button>
//       </section>
//     </div>
//   );
// }




// // import React, { useState } from "react";

// // export default function FetchGetExample() {
// //   const [users, setUsers] = useState([]); // store API data
// //   const [loading, setLoading] = useState(false); // show loading state
// //   const [error, setError] = useState(null); // handle errors

// //   const API_BASE = "https://jsonplaceholder.typicode.com";

// //   const headers = {
// //     "Content-Type": "application/json",
// //     "auth-token": "12345ABCDE",
// //   };

// //   // Function to GET data
// //   const handleGetFetch = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const res = await fetch(`${API_BASE}/users`, {
// //         method: "GET",
// //         headers,
// //       });

// //       if (!res.ok) {
// //         throw new Error(`HTTP error! status: ${res.status}`);
// //       }

// //       const data = await res.json();
// //       setUsers(data);
// //       console.log("FETCH GET:", data);
// //     } catch (err) {
// //       setError(err.message);
// //       console.error("Error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ padding: 20, fontFamily: "sans-serif" }}>
// //       <h2>🌐 GET Request Example (Fetch API)</h2>
// //       <button onClick={handleGetFetch} disabled={loading}>
// //         {loading ? "Loading..." : "Fetch Users"}
// //       </button>

// //       {error && <p style={{ color: "red" }}>❌ Error: {error}</p>}

// //       <ul>
// //         {users.map((user) => (
// //           <li key={user.id}>
// //             <strong>{user.name}</strong> ({user.email})
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }





