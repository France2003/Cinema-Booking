export const resetPasswordTemplate = (resetLink: string) => `
  <div style="font-family: Arial, sans-serif; background-color: #0f172a; padding: 20px; color: #f1f5f9;">
    <div style="max-width: 600px; margin: auto; background: #1e293b; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.6);">
      
      <!-- Header -->
      <div style="background: linear-gradient(to right, #ec4899, #facc15, #ef4444); padding: 30px 20px; text-align: center;">
        <img src="https://i.pinimg.com/1200x/e0/3a/70/e03a70c9078b128917923a48197aab4d.jpg" 
             alt="Booking Cinema" 
             style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%; margin-bottom: 15px; border: 3px solid #fff;" />
        <h1 style="
          font-size: 34px;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(to right, #ec4899, #facc15, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        ">
          Booking Cinema 🎬
        </h1>
      </div>

      <!-- Body -->
      <div style="padding: 30px; color: #f1f5f9; font-size: 16px;">
        <p style="margin: 0 0 12px;">Xin chào,</p>
        <p style="margin: 0 0 12px;">Bạn vừa yêu cầu đặt lại mật khẩu cho tài khoản của mình.</p>
        <p style="margin: 0 0 20px;">Nhấn vào nút bên dưới để đặt lại mật khẩu:</p>

        <div style="text-align: center; margin: 40px 0;">
          <a href="${resetLink}" 
             style="background: linear-gradient(to right, #ef4444, #f59e0b); 
                    color: #fff; 
                    padding: 16px 28px; 
                    text-decoration: none; 
                    border-radius: 8px; 
                    font-weight: bold; 
                    font-size: 18px; 
                    display: inline-block;
                    box-shadow: 0 4px 12px rgba(239,68,68,0.5);">
            🎟️ Đặt lại mật khẩu
          </a>
        </div>

        <p style="font-size: 14px; color: #cbd5e1;">Nếu bạn không yêu cầu, vui lòng bỏ qua email này.</p>
        <p style="margin-top: 30px; font-size: 14px;">Trân trọng,<br/>Booking Cinema Team</p>
      </div>

      <!-- Footer -->
      <div style="background: #0f172a; padding: 14px; text-align: center; font-size: 12px; color: #94a3b8;">
        &copy; ${new Date().getFullYear()} Booking Cinema. All rights reserved.
      </div>
    </div>
  </div>
`;
