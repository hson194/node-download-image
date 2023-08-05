const urls = [
  'https://bpsvietnam.vn/media/product/75-513-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-65-2.jpg',
  'https://bpsvietnam.vn/media/product/250-513-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-65-2.jpg',
  'https://bpsvietnam.vn/media/product/75-513-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-65-2.jpg',
  'https://bpsvietnam.vn/media/product/250-513-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-65-2.jpg',
  'https://bpsvietnam.vn/media/product/75-513-dieu-hoa-di-dong-dorosin-dakc-65-bps-1.jpg',
  'https://bpsvietnam.vn/media/product/250-513-dieu-hoa-di-dong-dorosin-dakc-65-bps-1.jpg',
  'https://bpsvietnam.vn/media/product/75-513-dieu-hoa-di-dong-dorosin-dakc-65-bps-2.jpg',
  'https://bpsvietnam.vn/media/product/250-513-dieu-hoa-di-dong-dorosin-dakc-65-bps-2.jpg',
  'https://bpsvietnam.vn/media/product/75-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-1.jpg',
  'https://bpsvietnam.vn/media/product/250-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-1.jpg',
  'https://bpsvietnam.vn/media/product/75-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-1.jpg',
  'https://bpsvietnam.vn/media/product/250-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-1.jpg',
  'https://bpsvietnam.vn/media/product/75-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-2.jpg',
  'https://bpsvietnam.vn/media/product/250-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-2.jpg',
  'https://bpsvietnam.vn/media/product/75-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-3.jpg',
  'https://bpsvietnam.vn/media/product/250-514-dieu-hoa-di-dong-dorosin-dakc-140-bpsvietnam-3.jpg',
  'https://bpsvietnam.vn/media/product/75-514-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-140-2.jpg',
  'https://bpsvietnam.vn/media/product/250-514-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-140-2.jpg',
  'https://bpsvietnam.vn/media/product/75-515-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-250-2.jpg',
  'https://bpsvietnam.vn/media/product/250-515-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-250-2.jpg',
  'https://bpsvietnam.vn/media/product/75-515-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-250-2.jpg',
  'https://bpsvietnam.vn/media/product/250-515-dieu-hoa-di-dong-cong-nghiep-dorosin-dakc-250-2.jpg',
  'https://bpsvietnam.vn/media/product/75-440-fujie-mpac10-2.jpg',
  'https://bpsvietnam.vn/media/product/250-440-fujie-mpac10-2.jpg',
  'https://bpsvietnam.vn/media/product/75-440-fujie-mpac10-2.jpg',
  'https://bpsvietnam.vn/media/product/250-440-fujie-mpac10-2.jpg',
  'https://bpsvietnam.vn/media/product/75-441-fujie-mpac12-2.jpg',
  'https://bpsvietnam.vn/media/product/250-441-fujie-mpac12-2.jpg',
  'https://bpsvietnam.vn/media/product/75-441-fujie-mpac12-2.jpg',
  'https://bpsvietnam.vn/media/product/250-441-fujie-mpac12-2.jpg',
  'https://bpsvietnam.vn/media/product/75-442-fujie-mpac12b-2.jpg',
  'https://bpsvietnam.vn/media/product/250-442-fujie-mpac12b-2.jpg',
  'https://bpsvietnam.vn/media/product/75-442-fujie-mpac12b-2.jpg',
  'https://bpsvietnam.vn/media/product/250-442-fujie-mpac12b-2.jpg',
  'https://bpsvietnam.vn/media/product/75-443-fujie-mpac14-2.jpg',
  'https://bpsvietnam.vn/media/product/250-443-fujie-mpac14-2.jpg',
  'https://bpsvietnam.vn/media/product/75-443-fujie-mpac14-2.jpg',
  'https://bpsvietnam.vn/media/product/250-443-fujie-mpac14-2.jpg',
  'https://bpsvietnam.vn/media/product/75-444-fujihome-pac07-2.jpg',
  'https://bpsvietnam.vn/media/product/250-444-fujihome-pac07-2.jpg',
  'https://bpsvietnam.vn/media/product/75-444-fujihome-pac07-2.jpg',
  'https://bpsvietnam.vn/media/product/250-444-fujihome-pac07-2.jpg',
  'https://bpsvietnam.vn/media/product/75-445-fujihome-pac09-2a.jpg',
  'https://bpsvietnam.vn/media/product/250-445-fujihome-pac09-2a.jpg',
  'https://bpsvietnam.vn/media/product/75-445-fujihome-pac09-2a.jpg',
  'https://bpsvietnam.vn/media/product/250-445-fujihome-pac09-2a.jpg',
  'https://bpsvietnam.vn/media/product/75-445-dieu-hoa-di-dong-fujihome-pac09-bps-1.jpg',
  'https://bpsvietnam.vn/media/product/250-445-dieu-hoa-di-dong-fujihome-pac09-bps-1.jpg',
  'https://bpsvietnam.vn/media/product/75-445-dieu-hoa-di-dong-fujihome-pac09-bps-2.jpg',
  'https://bpsvietnam.vn/media/product/250-445-dieu-hoa-di-dong-fujihome-pac09-bps-2.jpg',
  'https://bpsvietnam.vn/media/product/75-445-dieu-hoa-di-dong-fujihome-pac09-bps-3.jpg',
  'https://bpsvietnam.vn/media/product/250-445-dieu-hoa-di-dong-fujihome-pac09-bps-3.jpg',
  'https://bpsvietnam.vn/media/product/75-446-fujihome-pac10-2.jpg',
  'https://bpsvietnam.vn/media/product/250-446-fujihome-pac10-2.jpg',
  'https://bpsvietnam.vn/media/product/75-446-fujihome-pac10-2.jpg',
  'https://bpsvietnam.vn/media/product/250-446-fujihome-pac10-2.jpg',
  'https://bpsvietnam.vn/media/product/75-446-dieu-hoa-di-dong-fujihome-pac10-bps-1.jpg',
  'https://bpsvietnam.vn/media/product/250-446-dieu-hoa-di-dong-fujihome-pac10-bps-1.jpg',
  'https://bpsvietnam.vn/media/product/75-446-dieu-hoa-di-dong-fujihome-pac10-bps-2.jpg',
  'https://bpsvietnam.vn/media/product/250-446-dieu-hoa-di-dong-fujihome-pac10-bps-2.jpg',
  'https://bpsvietnam.vn/media/product/75-446-dieu-hoa-di-dong-fujihome-pac10-bps-3.jpg',
  'https://bpsvietnam.vn/media/product/250-446-dieu-hoa-di-dong-fujihome-pac10-bps-3.jpg',
];

module.exports = urls;
