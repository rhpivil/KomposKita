import { TagService } from '@/services/tag';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const tagData = await TagService.getTags();
        res.status(200).json({
          success: true,
          message: 'Tags is fetched successfuly',
          data: tagData,
        });
      } catch (error) {
        console.error('GETpost: error', error);
        res
          .status(500)
          .json({ success: false, message: 'Something went wrong' });
      }
      break;

    default:
      res.status(405).json({
        success: false,
        message: `This url cannot be accessed by ${req.method} method`,
      });
      break;
  }
}
