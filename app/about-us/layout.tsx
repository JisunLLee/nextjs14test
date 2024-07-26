import React from 'react';

const AboutUsLayout = ({ children }: React.PropsWithChildren) => (
<div>
  {children}
  &copy; welcome Next.js world!
</div>
);

export default AboutUsLayout;