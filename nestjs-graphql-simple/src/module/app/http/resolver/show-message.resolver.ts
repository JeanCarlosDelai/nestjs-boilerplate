import { ShowMessageUseCase } from '@src/module/app/core/usecase/show-message.usecase';
import { MessageInputDto } from '@src/module/app/http/dto/show-message/message-input.dto';
import { MessageOutputDto } from '@src/module/app/http/dto/show-message/message-output.dto';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => MessageOutputDto)
export class ShowMessageResolver {
  constructor(private readonly showMessageUseCase: ShowMessageUseCase) {}

  @Query(() => MessageOutputDto)
  showMessage(@Args() payload: MessageInputDto): MessageOutputDto {
    return this.showMessageUseCase.execute(payload);
  }
}
