// "use client";

// import { useState, useEffect } from "react";
// import { auth } from "@/lib/firebase/config";
// import type { User } from "firebase/auth";

// export function useAuth() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       setUser(authUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { user, loading, isAuthenticated: !!user };
// }
