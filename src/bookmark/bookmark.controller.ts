import {
    Post,
    Controller
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';

@Controller('bookmarks')
export class BookmarkController {
    @Post()
    createBookmark(
        @GetUser('id') userId: number
    ) {
        console.log(userId);
    }
}
