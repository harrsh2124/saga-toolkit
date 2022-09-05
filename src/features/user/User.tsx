import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUser, user as userState } from "./userSlice";

const User = () => {
  const { user, status } = useAppSelector(userState);
  const dispatch = useAppDispatch();
  const [userText, setUserText] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<number>(1);

  useEffect(() => {
    setUserText(user.email);
  }, [user]);

  return (
    <div>
      <div>
        {status === "loading" ? null : (
          <button
            aria-label="Decrement value"
            onClick={() => {
              dispatch(fetchUser(currentUser));
              setCurrentUser(currentUser + 1);
            }}
          >
            Fetch User
          </button>
        )}

        <div>{userText}</div>
      </div>
    </div>
  );
};

export default User;
