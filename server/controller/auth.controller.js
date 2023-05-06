import { authService, tokenService } from "../service/index.js";
import { catchAsync } from "../utils/catchAsync.js";

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

export { login };
