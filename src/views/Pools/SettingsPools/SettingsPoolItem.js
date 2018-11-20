import React from 'react';
import { AppSwitch } from '@coreui/react';
import {
  Button,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

export default function (props) {
  const {
    pool: {
      enabled,
      donation,
      url,
      username,
      password,
      proxy,
    },
    disabled,
    toggleEnabled,
    onDelete,
    onMoveUp,
    onMoveDown,
  } = props;

  return (
    <I18n>
      {({ i18n }) => (
        <Row form>
          <Col md={1}>
            <FormGroup>
              <div className="text-right" style={{ marginTop: '36px' }}>
                <AppSwitch className="" variant="pill" label color="success" checked={enabled} size="lg" onClick={toggleEnabled} />
              </div>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="poolUrl"><Trans>Url</Trans></Label>
              <Input type="text" name="poolUrl" id="poolUrl" bsSize="lg" disabled={disabled} value={url} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="poolUsername"><Trans>Username</Trans></Label>
              <Input type="text" name="poolUsername" id="poolUsername" bsSize="lg" disabled={disabled} value={username} />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label for="poolUsername"><Trans>Password</Trans></Label>
              <Input type="text" name="poolPassword" id="poolPassword" bsSize="lg" disabled={disabled} value={password || ''} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="poolProxy"><Trans>Proxy</Trans></Label>
              <Input type="text" name="poolProxy" id="poolProxy" bsSize="lg" disabled={disabled} value={proxy || ''} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Button size="lg" className="btn-default" style={{ marginTop: '29px', marginRight: '5px' }} onClick={onMoveUp}><i className="fa fa-arrow-up" /></Button>
              <Button size="lg" className="btn-default" style={{ marginTop: '29px', marginRight: '5px' }} onClick={onMoveDown}><i className="fa fa-arrow-down" /></Button>
              <Button size="lg" className="btn-danger" style={{ marginTop: '29px' }} onClick={onDelete}><i className="fa fa-times" /></Button>
            </FormGroup>
          </Col>
        </Row>
      )}
    </I18n>
  );
}
